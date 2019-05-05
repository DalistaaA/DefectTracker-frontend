export function DeleteProject(id) {
  if (window.confirm("Are you sure want to delete?")) {
    console.log(id);
    var url = `http://localhost:8080/DefectTracker/deleteProject/${id}`;

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
