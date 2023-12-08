const baseUrl = 'https://aviasales-test-api.kata.academy';

const fetchTickets = async (url: URL) => {
  return fetch(url)
    .then((response) => response.json())
    .then((result) => {
      if (result.tickets || result.stop) {
        return { tickets: result.tickets, loading: !result.stop, error: false };
      }
    })
    .catch(() => {
      return { tickets: [], loading: true, error: true };
    });
};

const getSearchId = async () => {
  const sId = localStorage.getItem('searchId');
  if (sId) {
    return sId;
  }
  return fetch(`${baseUrl}/search`)
    .then((response) => response.json())
    .then((result) => {
      localStorage.setItem('searchId', result.searchId);
      return result.searchId;
    });
};

export const getTickets = async () => {
  const searchId = await getSearchId();
  const url = new URL('/tickets', baseUrl);
  url.searchParams.append('searchId', searchId as string);
  const result = await fetchTickets(url);
  if (result && !result.loading) {
    localStorage.removeItem('searchId');
  }

  return result;
};
