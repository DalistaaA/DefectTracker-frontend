export function UpdateProject(data) {
  return fetch("http://localhost:8080/DefectTracker/updateProject", {
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
