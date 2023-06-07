import React from 'react'
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <div className="nav">
      <h3 className="header">Chats</h3>

      <div className="nav-list">
        <h5 className="nav-header">
          <div>
            <i
              className={
                isChannelNavToggled
                  ? "fa-solid fa-caret-down"
                  : "fa-solid fa-caret-down hidden"
              }
              onClick={(e) => setIsChannelNavToggled(!isChannelNavToggled)}></i>
            Channels
          </div>
          <i className="fa-solid fa-plus" onClick={addChannelWindowToggle}></i>
        </h5>
        {isChannelNavToggled && (
          <div className="nav-body">
            {channels.length > 0 &&
              channels.map((channel, i) => {
                return (
                  <div
                    key={"channel" + channel.id}
                    className={
                      selected && selected.id === channel.id
                        ? "nav-item selected"
                        : "nav-item"
                    }
                    onClick={() => updateSelected(channels[i])}>
                    <div className="initial">{channel.name[0]}</div>
                    <div className="nav-item-text">{channel.name}</div>
                  </div>
                );
              })}
          </div>
        )}
      </div>

      <div className="nav-list">
        <h5 className="nav-header">
          <div>
            <i
              className={
                isDMNavToggled
                  ? "fa-solid fa-caret-down"
                  : "fa-solid fa-caret-down hidden"
              }
              onClick={(e) => setIsDMNavToggled(!isDMNavToggled)}></i>
            Direct Messages
          </div>
          <i className="fa-solid fa-plus" onClick={handleDMToggle}></i>
        </h5>

        {isDMNavToggled && (
          <div className="nav-body">
            {userDMs.length > 0 &&
              userDMs.map((dm, i) => {
                return (
                  <div
                    key={"dm" + dm.id}
                    className={
                      selected && selected.id === dm.id
                        ? "nav-item selected"
                        : "nav-item"
                    }
                    onClick={() => updateSelected(userDMs[i])}>
                    <div className="initial">{dm.email[0].toUpperCase()}</div>
                    <div className="nav-item-text">{dm.email}</div>
                  </div>
                );
              })}
          </div>
        )}
      </div>

      <div className="footer">
        <div className="loggedin-user">
          <i className="fa-solid fa-user"></i>
          {loginInfo["data"].email}
        </div>

        <div className="logout" onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket"></i>
          Log out
        </div>
      </div>

      {isOpen && (
        <AddChannel
          addChannelWindowToggle={addChannelWindowToggle}
          retrieveChannels={retrieveChannels}
        />
      )}
    </div>
  );
}

export default NavigationBar