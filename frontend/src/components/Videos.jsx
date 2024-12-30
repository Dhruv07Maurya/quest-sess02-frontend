import React, { useState } from "react";
const Videos = () => {
  const [videos, setVideos] = useState([
    {
      title: "Awesome Video 1",
      description: "This is an amazing video about React.",
      currencyRequired: 10,
      videoUrl:
        "https://res.cloudinary.com/dldwctvii/video/upload/v1720792621/videos/qvgqqnmmacquv0fuxwbc.mp4",
    },
    {
      title: "Awesome Video 2",
      description: "This is a deep dive into JavaScript.",
      currencyRequired: 20,
      videoUrl:
        "https://res.cloudinary.com/dldwctvii/video/upload/v1720792621/videos/qvgqqnmmacquv0fuxwbc.mp4",
    },
  ]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [userCurrency, setUserCurrency] = useState(15); 
  const [newVideo, setNewVideo] = useState({
    title: "",
    description: "",
    currencyRequired: "",
    videoFile: null,
  });

  const handleVideoSelect = (video) => {
    if (userCurrency >= video.currencyRequired) {
      setSelectedVideo(video);
    } else {
      alert("You do not have enough virtual currency to view this video.");
    }
  };

  const handleAddVideo = (e) => {
    e.preventDefault();
    setVideos([
      ...videos,
      {
        title: newVideo.title,
        description: newVideo.description,
        currencyRequired: newVideo.currencyRequired,
        videoUrl: URL.createObjectURL(newVideo.videoFile),
      },
    ]);
    setNewVideo({ title: "", description: "", currencyRequired: "", videoFile: null });
  };

  return (
    <div className="videos-container">
      <div className="video-list">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`video-card ${userCurrency < video.currencyRequired ? "blurred" : ""}`}
            onClick={() => handleVideoSelect(video)}
          >
            <video className="video-thumbnail" width="100%" controls>
              <source src={video.videoUrl} type="video/mp4" />
            </video>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <p>Required Currency: {video.currencyRequired}</p>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="video-view">
          <h2>{selectedVideo.title}</h2>
          <video controls width="600">
            <source src={selectedVideo.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>{selectedVideo.description}</p>
        </div>
      )}
<br /><br />
      <div className="add-video-form">
        <h3>Add New Video</h3> <hr /> <br />
        <form onSubmit={handleAddVideo}>
          <div>
            <input
              type="text"
              placeholder="Title"
              value={newVideo.title}
              onChange={(e) =>
                setNewVideo({ ...newVideo, title: e.target.value })
              }
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Description"
              value={newVideo.description}
              onChange={(e) =>
                setNewVideo({ ...newVideo, description: e.target.value })
              }
              required
            />
          </div>
          <div>
            <input
              type="file"
              accept="video/*"
              onChange={(e) =>
                setNewVideo({ ...newVideo, videoFile: e.target.files[0] })
              }
              required
            />
          </div>
          <div>
            <label>Virtual Currency:</label>
            <select
              value={newVideo.currencyRequired}
              onChange={(e) =>
                setNewVideo({ ...newVideo, currencyRequired: e.target.value })
              }
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <button type="submit">Upload Video</button>
        </form>
      </div>
    </div>
  );
};

export default Videos;
