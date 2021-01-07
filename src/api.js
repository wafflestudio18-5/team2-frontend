import axios from "axios"

// set base url
// const baseUrl = "http://localhost:8000/"
const baseUrl = "https://api.wadium.shop/"
axios.defaults.baseURL = baseUrl

// user api
export const getUser = async (username) => {
  // GET /user?username={username}
  const response = await axios.get("user/?username=" + username)
  return response
}

export const getUserMeAbout = async (token) => {
  // GET /user/me/about
  const config = { headers: { Authorization: "Token " + token } }
  const response = await axios.get("user/me/about/", config)
  return response
}

export const getUserMeStory = async (token, publish, page) => {
  // GET /user/me/story/?publish=[true|false]&page={page}
  const config = { headers: { Authorization: "Token " + token } }
  const response = await axios.get(
    "user/me/story/?public=" + publish + "&page=" + page,
    config
  )
  return response
}

export const postUser = async (body) => {
  // POST /user/
  const response = await axios.post("user/", body)
  return response
}

export const postUserLogin = async (body) => {
  // POST /user/login/
  const response = await axios.post("user/login/", body)
  return response
}

export const postUserLogout = async (token) => {
  // POST /user/logout/
  const config = { headers: { Authorization: "Token " + token } }
  const response = await axios.post("user/logout/", {}, config)
  return response
}

// story api
export const postStory = async (token, body) => {
  // POST /story/
  const config = {
    headers: {
      Authorization: "Token " + token,
      "Content-Type": "application/json;charset=UTF-8",
    },
  }
  const response = await axios.post("story/", body, config)
  return response
}

export const postStoryStoryidPublish = async (token, id) => {
  // POST /story/{story_id}/publish/
  const config = { headers: { Authorization: "Token " + token } }
  const response = await axios.post("story/" + id + "/publish/", {}, config)
  return response
}

export const putStoryStoryid = async (token, body, id) => {
  // PUT /story/{story_id}/
  const config = {
    headers: {
      Authorization: "Token " + token,
      "Content-Type": "application/json;charset=UTF-8",
    },
  }
  const response = await axios.put("story/" + id + "/", body, config)
  return response
}

export const getStoryMain = async (token) => {
  // GET /story/main/
  var response
  if (token === "") {
    response = await axios.get("story/main/")
  } else {
    const config = { headers: { Authorization: "Token " + token } }
    response = await axios.get("story/main/", {}, config)
  }
  return response
}

export const getStoryTrending = async (token) => {
  // GET /story/main/
  var response
  if (token === "") {
    response = await axios.get("story/trending/")
  } else {
    const config = { headers: { Authorization: "Token " + token } }
    response = await axios.get("story/trending/", {}, config)
  }
  return response
}

export const getStoryPage = async (token, pagenum) => {
  // GET /story/?page={page_number}
  var response
  if (token === "") {
    response = await axios.get("story/", { params: { page: pagenum } })
  } else {
    const config = { headers: { Authorization: "Token " + token } }
    response = await axios.get("story/", { params: { page: pagenum } }, config)
  }
  return response
}

export const getStory = async ({ page, title, tag }) => {
  // GET /story?page={page#}&title={title}&tag={tag}
  let queryString = "?"
  if (page) {
    queryString += "page=" + page + "&"
  }
  if (title) {
    queryString += "title=" + title + "&"
  }
  if (tag) {
    queryString += "tag=" + tag + "&"
  }
  queryString = queryString.slice(0, -1)
  const response = await axios.get("story/" + queryString)
  return response
};

export const getStoryById = async (storyid) => {
  //GET /story/{story_id}
  const response = await axios.get("story/" + storyid)
  return response
}

export const getResponse = async (storyid, pagenum) => {
  //GET /story/{story_id}/comment/?page={pagenum}
  const response = await axios.get('story/'+storyid+'/comment/?page='+pagenum);
  return response;
};


export const postComment = async (token, body, storyid) => {
  // POST /story/{story_id}/comment/

  const config = {
    headers: {
      Authorization: "Token " + token,
    },
  }
  const response = await axios.post("story/"+storyid+"/comment/", body, config)
  return response
};

export const deleteComment = async (token, storyid, commentid) => {
  //DELETE /story/{story_id}/comment/?id={comment_id}
  const config = {
    headers: {
      Authorization: "Token " + token,
    },
  }
  const response = await axios.delete("story/"+storyid+"/comment/?id="+commentid,config)
  return response
}

export const deleteStoryStoryId = async (token, id) => {
  // DELETE /story/{story_id}
  const config = { headers: { Authorization: "Token " + token } }
  const response = await axios.delete("story/" + id + "/", config)
  return response
}
