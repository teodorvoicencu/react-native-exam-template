// @format
import axios from 'axios';

export default function initAxios(): void {
    axios.defaults.baseURL = 'http://localhost:3200';
}
