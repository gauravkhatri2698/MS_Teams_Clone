import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed.jsx';
import './App.css';
import LoginForm from './Components/LoginForm.jsx';

function App() {
  if (!localStorage.getItem('username'))
    return <LoginForm />;

  return (
    <>
      <ChatEngine
        height='100vh'
        projectID='5df72097-de81-45c2-aace-1bc46caad020'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </>
  );
}

export default App;
