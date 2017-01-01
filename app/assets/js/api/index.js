/**
 * Handle API calls.
 */
export const fetchImages = (word) => {
  console.log('do we get here????')
  return
    fetch('/api/image/' + word, {
      method: 'GET'
    })
    .then(function(response) {
      console.log(response)
      return response.json();
    })
    .catch(function(error) {
      // TODO
    })
};
