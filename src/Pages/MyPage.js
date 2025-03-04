import React from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './MyPage.css';
import dummyTweets from '../static/dummyData';

const MyPage = () => {
  const filteredTweets = dummyTweets.filter((tweet) => tweet.username === 'Bob');
  const hasTweets = filteredTweets.length > 0;
  // TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 Bob의 트윗만 보여줘야 합니다.

  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={hasTweets ? filteredTweets[0].picture : "defaultProfileImage.jpg"} alt="Profile" />
          </div>

          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {hasTweets ? filteredTweets[0].username : 'Bob'} Profile
            </p>
            <p>{hasTweets ? '28 팔로워 100 팔로잉' : '팔로워와 팔로인 수를 불러오지 못했습니다.'}</p>
          </div>
        </div>
      </div>
      <ul className="tweets__mypage">
        {/* TODO : 주어진 트윗 목록(dummyTweets)중 
        현재 유져인 Bob의 트윗만 보여줘야 합니다. */}
        {filteredTweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </ul>
      <Footer />
    </section>
  );
};

export default MyPage;
