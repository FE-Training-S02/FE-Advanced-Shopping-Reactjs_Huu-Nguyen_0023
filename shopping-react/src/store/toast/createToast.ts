let id = 0;

const defaultOptions = {
  color: '#198754',
};

export default function createToast(options: object) {
  return {
    ...defaultOptions,
    ...options,
    id: id++,
  };
}
