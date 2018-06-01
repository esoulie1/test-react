import React, { PureComponent } from 'react';

import Table from 'components/base/Table';

class Music extends PureComponent {
  render() {
    const { playlist, myPlaylist, addMusic, removeMusic } = this.props;
    const headers = ['Titre de la chanson', 'Jouer la musique', 'Playlist action']

    return (
      <div className='container'>
        <h1>Music Page</h1>
        <Table headers={headers} playlist={playlist} playlistAction={addMusic}/>
        <Table headers={headers} playlist={myPlaylist} playlistAction={removeMusic}/>
      </div>
    );
  }
}

export default Music;
