export function UpdateDefect(data) {
  return fetch("http://localhost:8080/DefectTracker/defect/updateDefect", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      return res;
    })
    .catch(err => err);
}
