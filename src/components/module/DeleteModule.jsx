export function DeleteModule(moduleId) {
  if (window.confirm("Are you sure want to delete?")) {
    console.log(moduleId);
    var url = `http://localhost:8080/DefectTracker/module/deleteModule/${moduleId}`;

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
