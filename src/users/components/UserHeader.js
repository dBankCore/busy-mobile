import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImagePreview from '../../components/Post/ImagePreview';
import Avatar from '../../components/Avatar';
import Statistics from '../../components/Statistics';

const Container = styled.View`
  padding: 0 16px 16px;
  background-color: white;
  margin-bottom: 8px;
`;

const Center = styled.View`
  position: relative;
`;

const TopContainer = styled.View`
  background: white;
  position: relative;
  padding-bottom: 16px;
`;

const AvatarContainer = styled.View`
  position: absolute;
  left: 16px;
  bottom: 0px;
`;

const Name = styled.Text`
  margin: 8px 0;
  font-size: 20px;
  font-weight: bold;
`;

const About = styled.Text`
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
`;

const Footer = styled.View`
  padding-top: 16px;
`;

const UserHeader = ({ name, displayName, about, postCount, followerCount, followingCount }) => (
  <React.Fragment>
    <TopContainer>
      <ImagePreview source={require('../../../assets/images/cover.jpg')} />
      <AvatarContainer>
        <Avatar size={72} username={name} />
      </AvatarContainer>
    </TopContainer>
    <Container>
      <Center>
        <Name>{displayName || name}</Name>
        <About>{about}</About>
      </Center>
      <Footer>
        <Statistics>
          <Statistics.Item title="Posts" number={postCount} />
          <Statistics.Item title="Followers" number={followerCount} />
          <Statistics.Item title="Following" number={followingCount} />
          <Statistics.Item title="Voting power" number={0.98} displayStyle="percent" />
        </Statistics>
      </Footer>
    </Container>
  </React.Fragment>
);

UserHeader.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string,
  about: PropTypes.string,
  postCount: PropTypes.number,
  followerCount: PropTypes.number,
  followingCount: PropTypes.number,
};

UserHeader.defaultProps = {
  displayName: '',
  about: '',
  postCount: 0,
  followerCount: 0,
  followingCount: 0,
};

export default UserHeader;
