import React from "react";

const AboutUsBody = () => {
  return (
    <div>
      <section id="about-us" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.heading}>About Our Content Management System</h2>
          <p style={styles.vision}>
            Our mission is to provide a comprehensive, user-friendly, and innovative content management system (CMS) that empowers organizations to manage their digital assets seamlessly. We are committed to offering scalable solutions that meet the dynamic needs of businesses and content creators worldwide.
          </p>
          <div style={styles.featuresSection}>
            <h3 style={styles.subHeading}>Key Features</h3>
            <div style={styles.featuresList}>
              <div style={styles.featureItem}>
                <h4 style={styles.featureTitle}>Easy-to-Use Interface</h4>
                <p style={styles.featureDescription}>
                  Our CMS is designed with simplicity in mind, offering an intuitive interface that allows users to easily manage and organize content without technical expertise.
                </p>
              </div>
              <div style={styles.featureItem}>
                <h4 style={styles.featureTitle}>Customizable Templates</h4>
                <p style={styles.featureDescription}>
                  Choose from a wide range of customizable templates to give your website a unique look, tailored to your brand and style.
                </p>
              </div>
              <div style={styles.featureItem}>
                <h4 style={styles.featureTitle}>Robust Security</h4>
                <p style={styles.featureDescription}>
                  We prioritize security with features like encrypted passwords, user role management, and secure content access to ensure your digital assets are always protected.
                </p>
              </div>
              <div style={styles.featureItem}>
                <h4 style={styles.featureTitle}>Multilingual Support</h4>
                <p style={styles.featureDescription}>
                  With built-in multilingual support, our CMS allows you to manage content in multiple languages, expanding your reach to a global audience.
                </p>
              </div>
              <div style={styles.featureItem}>
                <h4 style={styles.featureTitle}>Advanced Search and Filtering</h4>
                <p style={styles.featureDescription}>
                  Our advanced search and filtering features make it easy to find and organize content quickly, saving time and improving efficiency.
                </p>
              </div>
            </div>
          </div>
          <div style={styles.missionSection}>
            <h3 style={styles.subHeading}>Our Mission</h3>
            <p style={styles.missionText}>
              We strive to simplify content management for businesses, content creators, and organizations, enabling them to focus on what truly matters—creating exceptional content. Our CMS is built to be flexible, secure, and scalable, ensuring that it adapts to the growing needs of users.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  section: {
    padding: "50px 0",
    backgroundColor: "#007BFF",  // Matches the header background color (blue)
    color: "#fff",                // Ensures text is white for contrast
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#fff",               // White text to match the header
  },
  vision: {
    fontSize: "1.2rem",
    color: "#f0f0f0",            // Light grey text for readability
    marginBottom: "40px",
    lineHeight: "1.6",
  },
  featuresSection: {
    marginTop: "40px",
    background: "#ffffff",      // White background to contrast with the header color
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  subHeading: {
    fontSize: "2rem",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#333",              // Darker text for subheadings
  },
  featuresList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "20px",
  },
  featureItem: {
    background: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  },
  featureTitle: {
    fontSize: "1.5rem",
    color: "#222",
    marginBottom: "10px",
  },
  featureDescription: {
    fontSize: "1.1rem",
    color: "#555",
    lineHeight: "1.6",
  },
  missionSection: {
    marginTop: "50px",
  },
  missionText: {
    fontSize: "1.1rem",
    color: "#f0f0f0",            // Light grey to match the vision text color
    lineHeight: "1.6",
  },
};

export default AboutUsBody;
