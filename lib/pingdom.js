import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

const PINGDOM_API_KEY = process.env.PINGDOM_API_KEY;

const cache = setupCache({
  maxAge: 60 * 1000,
});

const pingdom = axios.create({
  baseURL: 'https://api.pingdom.com/api/3.1/',
  adapter: cache.adapter,
  headers: {
    'Authorization': `Bearer ${PINGDOM_API_KEY}`
  }
});

const checks = async (names) => {
  const response = await pingdom.get('checks');
  return response.data.checks.filter(check => names.includes(check.name));
}

const uptime = async (id) => {
  // Not one of JavaScript: The good parts
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const response = await pingdom.get(`summary.average/${id}`, {
    params: {
      'includeuptime': true,
      // Also not one of JavaScript: The good parts
      'from': parseInt(thirtyDaysAgo.getTime() / 1000).toFixed(0)
    }
  });

  return response.data;
}

export default { uptime, checks };
