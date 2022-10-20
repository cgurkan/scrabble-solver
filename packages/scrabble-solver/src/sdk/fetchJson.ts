import { isError } from '@scrabble-solver/types';

const fetchJson = async <T>(input: RequestInfo | URL, init?: RequestInit): Promise<T> => {
  let response: Response;

  try {
    response = await fetch(input, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...init?.headers,
      },
    });
  } catch (error) {
    const message = isError(error) ? error.message : 'Unknown error';
    throw new Error(`Network error: ${message}`);
  }

  if (response.ok) {
    return response.json();
  }

  try {
    const json = await response.json();

    if (isError(json)) {
      throw new Error(json.message);
    }
  } finally {
    // do nothing
  }

  throw new Error(`HTTP ${response.status}: ${response.statusText}`);
};

export default fetchJson;