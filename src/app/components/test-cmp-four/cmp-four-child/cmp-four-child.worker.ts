/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  (data as { id: number, isOk: boolean }[]).push({ id: 999, isOk: false });
  const first = data[0];
  data.push(first);
  postMessage(data);
});
