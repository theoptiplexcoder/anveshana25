import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResumeAnalyse = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

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
    setResult(null);

    if (!selectedFile || !selectedJob) {
      setError('Please select both a resume and a job description');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('resume', selectedFile);
    formData.append('job_id', selectedJob);

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

      setResult(response.data);
      console.log('Analysis results:', response.data);
      
    } catch (err) {
      setError(err.response?.data?.message || 'Submission failed. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Render analysis results
  const renderResults = () => {
    if (!result) return null;
  
    return (
      <div style={styles.resultsContainer}>
        <h3>Analysis Results</h3>
        
        <div style={styles.section}>
          <div style={styles.scoreBox}>
            <span style={styles.scoreLabel}>Match Score:</span>
            <span style={styles.scoreValue}>{result.rank}%</span>
          </div>
          <div style={styles.experienceBox}>
            Total Experience: {result.total_experience} years
          </div>
        </div>
  console.log(result)
        {/* Skills Section */}
        <div style={styles.section}>
          <h4>Skills Found:</h4>
          <div style={styles.skillsGrid}>
            {result.skills && result.skills.length > 0 ? (
              result.skills.map((skill, index) => (
                <div key={index} style={styles.skillItem}>
                  {skill}
                </div>
              ))
            ) : (
              <div>No skills found</div>
            )}
          </div>
        </div>
  
        {/* Project Categories Section */}
        <div style={styles.section}>
          <h4>Project Categories:</h4>
          <div style={styles.categoryContainer}>
            {result.project_categories && result.project_categories.length > 0 ? (
              result.project_categories.map((category, index) => (
                <span key={index} style={styles.categoryPill}>
                  {category}
                </span>
              ))
            ) : (
              <div>No project categories found</div>
            )}
          </div>
        </div>
  
        {/* Explanation Section */}
        <div style={styles.section}>
          <h4>Analysis Breakdown:</h4>
          <div style={styles.explanation}>
            {result.explanation.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

  return (
    <div style={styles.container}>
      <h2>Resume Analysis</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Resume Upload */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Upload Resume (PDF/DOCX):
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
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
          {loading ? 'Analyzing...' : 'Analyze Resume'}
        </button>
      </form>

      {/* Display Results */}
      {renderResults()}
    </div>
  );
};

// Updated styles
const styles = {
  container: {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '2rem',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2rem',
  },
  resultsContainer: {
    marginTop: '2rem',
    padding: '1.5rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
  },
  section: {
    marginBottom: '2rem',
    padding: '1rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  scoreBox: {
    display: 'inline-block',
    padding: '1rem 2rem',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '8px',
    marginRight: '1rem',
  },
  experienceBox: {
    display: 'inline-block',
    padding: '1rem 2rem',
    backgroundColor: '#28a745',
    color: 'white',
    borderRadius: '8px',
  },
  scoreLabel: {
    fontSize: '0.9rem',
    display: 'block',
  },
  scoreValue: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '0.5rem',
    marginTop: '1rem',
  },
  skillItem: {
    padding: '0.5rem',
    backgroundColor: '#e9ecef',
    borderRadius: '4px',
    textAlign: 'center',
  },
  categoryContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '1rem',
  },
  categoryPill: {
    padding: '0.3rem 0.8rem',
    backgroundColor: '#17a2b8',
    color: 'white',
    borderRadius: '20px',
    fontSize: '0.9rem',
  },
  explanation: {
    lineHeight: '1.6',
    color: '#333',
    whiteSpace: 'pre-wrap',
  },
  // ... (keep previous styles from earlier version)
};

export default ResumeAnalyse;