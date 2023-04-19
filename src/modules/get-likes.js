import getAppId from './get-app-id.js';

const getLikes = async () => {
  const appId = await getAppId();
  const likeUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;
  const response = await fetch(likeUrl, {
    method: 'Get',
  });
  if (response.ok) {
    const likes = await response.text();
    if (likes !== '') {
      localStorage.setItem('likes', likes);
    }
  }
};

export default getLikes;