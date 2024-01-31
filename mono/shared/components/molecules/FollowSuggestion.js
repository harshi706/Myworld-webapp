import React from 'react';
import Image from 'next/image';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import PropTypes from 'prop-types';

const FollowSuggestion = ({imgSrc}) => {
  return (
    <div className="flex gap-5 p-5 items-center">
      <Image src={imgSrc} width={25} height={25} alt="user" />
      <div className="flex flex-col">
        <Text label="Username" style="follow-text1" />
        <Text label="user profession" style="follow-text2" />
      </div>
      <Button label="Follow" />
    </div>
  );
};

FollowSuggestion.propTypes = {
    imgSrc : PropTypes.string
}

FollowSuggestion.defaultProps = {
    imgSrc : ''
}

export default FollowSuggestion;
