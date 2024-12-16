import React from 'react';

const PublicationCard = ({ publication }) => {
  return (
    <div className="publication-card">
      <header>
        <span>{new Date(publication.date).toLocaleDateString()}</span>
        <a href={publication.sourceLink} target="_blank" rel="noopener noreferrer">
          {publication.source}
        </a>
      </header>
      <h2>{publication.title}</h2>
      {publication.tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
      <p>{publication.content}</p>
      <footer>
        <button>
          <a href={publication.sourceLink} target="_blank" rel="noopener noreferrer">
            Читать в источнике
          </a>
        </button>
        <span>{publication.wordCount} слов</span>
      </footer>
    </div>
  );
};

export default PublicationCard;
