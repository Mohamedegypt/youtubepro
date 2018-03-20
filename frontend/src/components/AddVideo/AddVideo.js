import React from 'react';

class AddVideo extends React.Component {
  render() {
    return (
      <div className="AddVideo">
        <label className="edit-title">Title</label>
        <input type="text"/>
        <label className="edit-desc">Description</label>
        <input type="text"/>
        <label className="edit-date">Display Date</label>
        <input type="date"/>
        <label className="edit-date">Expiry Date</label>
        <input type="date"/>
        <label>YouTube Embeded Code</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <a href="#">Delete this video</a>
        <button type="submit">Add</button>
      </div>
    );
  }
}

export default AddVideo;