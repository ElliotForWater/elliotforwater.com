const responseParser = async (response) => {
  switch (response.status) {
    case 403:
      window.location.href = '/logout';
      break;
    case 200:
      try {
        const parsedResponse = await response.json();
        return { status: response.status, data: parsedResponse };
      } catch (e) {
        return {
          status: response.status,
          message: 'UNKNOWN_ERROR',
        };
      }
    case 400:
    case 500:
      return { status: response.status };
    default:
      break;
  }

  return {
    status: response.status,
    message: 'UNKNOWN_DATA',
  };
};

export async function post(url = '', data = {}, headers = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match 'Content-Type' header
  });
  return responseParser(response);
}

export async function del(url = '', data = {}, headers = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      ...headers,
      'x-xsrf-token': localStorage.getItem('xsrf-token'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match 'Content-Type' header
  });
  return responseParser(response);
}

export async function put(url = '', data = {}, headers = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      ...headers,
      'x-xsrf-token': localStorage.getItem('xsrf-token'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match 'Content-Type' header
  });
  return responseParser(response);
}

export async function get(url = '', headers = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      ...headers,
      'x-xsrf-token': localStorage.getItem('xsrf-token'),
      'Content-Type': 'application/json',
    },
  });
  return responseParser(response);
}
