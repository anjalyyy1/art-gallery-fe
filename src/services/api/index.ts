import axios from 'axios';

// formatting response
const handleResponse = ({ response, error }: any) => {
  let formattedResponse = {};
  if (error) {
    return (formattedResponse = {
      error: error || 'Error',
      success: false,
    });
  }

  formattedResponse = {
    data: response.data,
    success: true,
  };

  return formattedResponse;
};

class FetchUtils {
  baseUrl: string;

  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASE_URL}`;
  }

  // get request
  getData = async (url: string) => {
    const apiUrl = `${this.baseUrl}${url}`;

    try {
      const response = await axios.get(apiUrl);
      return handleResponse({ response });
    } catch (error) {
      return handleResponse({ error });
    }
  };
}

export default new FetchUtils();
