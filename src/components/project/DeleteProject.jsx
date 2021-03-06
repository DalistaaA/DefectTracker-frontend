export function DeleteProject(projectId) {
  if (window.confirm("Are you sure want to delete?")) {
    console.log(projectId);
    var url = `http://localhost:8080/DefectTracker/deleteProject/${projectId}`;

    return fetch(url, {
      method: "DELETE",
      // body: JSON.stringify(items),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res;
      })
      .catch(err => err);
  }
}
