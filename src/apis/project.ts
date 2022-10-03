import Api from './Api';

export const getProjectById = (id: string) => Api.get(`/projects/${id}`);

export const enterProjectById = (id: string) => Api.post(`/projects/${id}/applicants`);
