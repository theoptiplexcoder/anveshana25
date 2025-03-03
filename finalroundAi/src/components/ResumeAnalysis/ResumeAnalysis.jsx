import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResumeAnalyse = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null); // State to store the parsed analysis result

  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/jobs');
        setJobs(response.data);
      } catch (err) {
        setError('Failed to load job descriptions');
      }
    };
    fetchJobs();
  }, []);

  // Handle file selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Handle job selection
  const handleJobChange = (e) => {
    setSelectedJob(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setAnalysisResult(null); // Reset analysis result on new submission

    if (!selectedFile || !selectedJob) {
      setError('Please select both a resume and a job description');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('resume', selectedFile); // Corrected typo: 'resume' instead of 'resume'
    formData.append('job_description', selectedJob);

    try {
      const response = await axios.post(
        'http://localhost:8000/api/resume',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Handle successful response
      console.log('Upload successful:', response.data);

      if (response.data.status) {
        // Parse the stringified JSON data
        const parsedData = JSON.parse(response.data.data);
        setAnalysisResult(parsedData); // Store parsed data in state
      } else {
        setError(response.data.message || 'Analysis failed');
      }
    } catch (err) {
      setError('Submission failed. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Resume Analysis</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Resume Upload */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Upload Resume (PDF/DOCX/TXT):
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt"
              style={styles.fileInput}
              required
            />
          </label>
        </div>

        {/* Job Selection */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Select Job Description:
            <select
              value={selectedJob}
              onChange={handleJobChange}
              style={styles.select}
              required
            >
              <option value="">Select a job</option>
              {jobs.map((job) => (
                <option key={job.id} value={job.id}>
                  {job.title} - {job.company}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Error Message */}
        {error && <div style={styles.error}>{error}</div>}

        {/* Submit Button */}
        <button
          type="submit"
          style={styles.button}
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Analyze Resume'}
        </button>
      </form>

      {/* Display Analysis Result */}
      {analysisResult && (
        <div style={styles.analysisResult}>
          <h3>Analysis Result</h3>
          <p><strong>Rank:</strong> {analysisResult.rank}</p>
          <p><strong>Total Experience:</strong> {analysisResult.total_experience} years</p>

          <h4>Skills:</h4>
          <ul style={styles.skillsList}>
            {analysisResult.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <h4>Project Categories:</h4>
          <ul style={styles.skillsList}>
            {analysisResult.project_categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Basic styling
const styles = {
  container: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '2rem',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontWeight: '600',
  },
  fileInput: {
    padding: '0.5rem',
  },
  select: {
    padding: '0.5rem',
    width: '100%',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    ':disabled': {
      backgroundColor: '#6c757d',
    },
  },
  error: {
    color: 'red',
    padding: '0.5rem',
  },
  analysisResult: {
    marginTop: '2rem',
    padding: '1rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '4px',
  },
  skillsList: {
    listStyleType: 'none',
    padding: '0',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
};

export default ResumeAnalyse;