import React from "react";
import "../styles/styles.css"; // Ensure the CSS file has the updated styles

function ContentManagement() {
  const promptLogin = () => {
    const userResponse = window.confirm(
      "Please log in or register to manage this content."
    );
    if (userResponse) {
      // Redirect to login page
      window.location.href = "/login"; // Update the URL as per your login page
    }
  };

  return (
    <section id="cms-dashboard" className="cms-container">
      <h2 className="cms-title">Content Management Dashboard</h2>
      <p className="cms-description">
        Manage your content efficiently and keep your system organized.
      </p>

      {/* Articles Section */}
      <div className="category">
        <div className="category-header">
          <h3>Manage Articles</h3>
        </div>
        <div className="content-grid">
          <div className="content-card">
            <div className="content-image">
              <img src="/img/article-icon.jpg" alt="Article Icon" />
            </div>
            <div className="content-details">
              <h3>How to Start Blogging</h3>
              <p className="author">Author: John Doe</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Edit
              </button>
            </div>
          </div>
          <div className="content-card">
            <div className="content-image">
              <img src="/img/article-icon.jpg" alt="Article Icon" />
            </div>
            <div className="content-details">
              <h3>Top 10 SEO Tips</h3>
              <p className="author">Author: Jane Smith</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Edit
              </button>
            </div>
          </div>
          <div className="content-card">
            <div className="content-image">
              <img src="/img/article-icon.jpg" alt="Article Icon" />
            </div>
            <div className="content-details">
              <h3>Design Trends 2024</h3>
              <p className="author">Author: Mike Brown</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Media Section */}
      <div className="category">
        <div className="category-header">
          <h3>Manage Media</h3>
        </div>
        <div className="content-grid">
          <div className="content-card">
            <div className="content-image">
              <img src="/img/media-icon.jpg" alt="Media Icon" />
            </div>
            <div className="content-details">
              <h3>Banner Image</h3>
              <p className="file-size">Size: 2MB</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Edit
              </button>
            </div>
          </div>
          <div className="content-card">
            <div className="content-image">
              <img src="/img/media-icon.jpg" alt="Media Icon" />
            </div>
            <div className="content-details">
              <h3>Logo File</h3>
              <p className="file-size">Size: 500KB</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Edit
              </button>
            </div>
          </div>
          <div className="content-card">
            <div className="content-image">
              <img src="/img/media-icon.jpg" alt="Media Icon" />
            </div>
            <div className="content-details">
              <h3>Video Tutorial</h3>
              <p className="file-size">Size: 20MB</p>
              <button className="btn-filled-dark" onClick={promptLogin}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentManagement;
