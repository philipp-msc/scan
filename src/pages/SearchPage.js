import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PublicationCard from '../components/PublicationCard';

const SearchPage = () => {
  const [inn, setInn] = useState('');
  const [tone, setTone] = useState('any');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  const fetchResults = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/objectsearch', {
        inn,
        tone,
        dateRange,
        page,
        limit: ITEMS_PER_PAGE,
      });
      setResults((prev) => [...prev, ...response.data.items]);
      setHasMore(response.data.items.length === ITEMS_PER_PAGE);
    } catch (err) {
      setError('Ошибка загрузки результатов');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!inn) {
      setError('Введите корректный ИНН');
      return;
    }
    setResults([]);
    setPage(1);
    setHasMore(true);
    fetchResults();
  };

  useEffect(() => {
    if (page > 1) {
      fetchResults();
    }
  }, [page]);

  const loadMore = () => {
    if (hasMore && !loading) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div>
      <h1>Поиск публикаций</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="ИНН" 
          value={inn} 
          onChange={(e) => setInn(e.target.value)} 
        />
        <select value={tone} onChange={(e) => setTone(e.target.value)}>
          <option value="positive">Позитивная</option>
          <option value="negative">Негативная</option>
          <option value="any">Любая</option>
        </select>
        <input 
          type="date" 
          value={dateRange.start} 
          onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })} 
        />
        <input 
          type="date" 
          value={dateRange.end} 
          onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })} 
        />
        <button type="submit">Поиск</button>
      </form>
      {error && <p className="error">{error}</p>}
      <div>
        {results.map((result, index) => (
          <PublicationCard key={index} publication={result} />
        ))}
        {loading && <p>Загрузка...</p>}
        {hasMore && !loading && <button onClick={loadMore}>Показать больше</button>}
      </div>
    </div>
  );
};

export default SearchPage;
