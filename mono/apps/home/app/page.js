import Button from 'shared/components/atoms/Button';
import Input from 'shared/components/atoms/Input';
import PopupCategory from 'shared/components/atoms/PopupCategory';
import ToggleButton from 'shared/components/atoms/ToggleButton';
import Tag from 'shared/components/atoms/Tag';
import Toast from 'shared/components/atoms/Toast';
import Text from 'shared/components/atoms/Text';
import ImageButton from 'shared/components/molecules/ImageButton';
import HubSuggestion from 'shared/components/molecules/HubSuggetion';
import Sectiontag from 'shared/components/molecules/Sectiontag';
import MyspaceCard from 'shared/components/molecules/MyspaceCard';
import RecommendedCard from 'shared/components/molecules/RecommendedCard';
import EnableDiscovery from 'shared/components/molecules/EnableDiscovery';
import { toast } from 'react-toastify';
import FollowSuggestion from 'shared/components/molecules/FollowSuggestion';
import StreamFollowCard from 'shared/components/molecules/StreamFollowCard';
import TopicContentCard from 'shared/components/molecules/TopicContentCard';
import ExpertCard from 'shared/components/molecules/ExpertCard';
import HubCard from 'shared/components/molecules/HubCard';
import ToggleCreateOption from 'shared/components/molecules/ToggleCreateOption';
import Caresoul from 'shared/components/Organism/Caresoul';
import Livestream from 'shared/components/Organism/Livestream';

import Sidebar from 'shared/components/Organism/Sidebar';
import Suggestion from 'shared/components/Organism/Suggestion';
import SignUp from 'shared/components/Organism/SignUp';
// import MainSlider from 'shared/components/Organism/MainSlider';
import DoubleCard from 'shared/components/molecules/DoubleCard';
import PopUp from 'shared/components/Organism/PopUp';
import LoginModal from 'shared/components/Organism/Login';
import Header from 'shared/components/molecules/Header';

export default async function Index() {
  // const handleClick = () => {
  //   console.log('clicked');
  //   toast.success('Successfully clicked');
  // };
  return (
    <div className="relative">
      {/* <h1 className="text-3xl">This is Homepage</h1>
      <Button label="Follow" style={'primary'} />
      <Input hint="Enter you text" style={'default'} />
      <PopupCategory category="web development" />
      <ToggleButton />
      <Tag label="Follow" />
      <Toast onClick={handleClick} label={'Howdy Modi'} />
      <Text label={'Schedule Hub'} style={'create-text3'} />
      <ImageButton img={'/google.png'} style={'text-black'} />
      <HubSuggestion />
      <Sectiontag />
      <MyspaceCard img1={'/man.jpg'} img2={'/man.jpg'} img3={'/man.jpg'} />
      <RecommendedCard img={'/s1.avif'} img1={'/man.jpg'} />
      <EnableDiscovery />
      <FollowSuggestion label1={'User'} label2={'User Profession'} gap={"gap-5"} />
      <StreamFollowCard name={'Rajat Kumar'} />
      <TopicContentCard />
      <ExpertCard />
      <HubCard />
      <ToggleCreateOption
        optionTitle={'Everyone'}
        optionDesc={'Anyone can send you Hub join request'}
      />

      <Caresoul child={<TopicContentCard />} />
      <Livestream /> */}
      <div className="z-[100]">
        <PopUp />
      </div>
      <div className=" fixed left-0 top-0 h-full z-[-1]">
        <Sidebar />
      </div>
      <div className=" absolute left-[7vw] top-0 p-4  z-[-1]">
        <Header />
        <Livestream />
      </div>
      <div
        className=" absolute right-0 top-3 w-[25vw] flex flex-wrap gap-6 border-l mr-3 pl-3  z-[-1]
      "
      >
        <Input hint="Enter you text" style={'home'} />
        <SignUp img={'/google.png'} txt={'Signup with phone or email'} />
        <Suggestion name={'Rajat Kumar'} imgSrc={'/i2.jpg'} />
      </div>
      {/* <Suggestion />
      <SignUp img={'/google.png'} txt={'Signup with phone or email'} />
      
      <DoubleCard img1={'/i1.jpg'} img2={'/i2.jpg'} />
      
      <PopUp />
      <LoginModal
        img1={'/ic_cross_cancel_black.svg'}
        img2={'/logo.jpg'}
        img3={'/google.png'}
      /> */}
    </div>
  );
}
