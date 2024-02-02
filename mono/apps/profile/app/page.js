import Text from 'shared/components/atoms/Text';
import Sidebar from 'shared/components/Organism/Sidebar';
import Header from 'shared/components/molecules/Header';
import Image from 'next/image';
import Button from 'shared/components/atoms/Button';
import HubCard from 'shared/components/molecules/HubCard';
export default async function Index() {
  return (
    <div>
      {/* <p>This is from practice page</p>
      <EnterConversation /> */}
      <div className=" fixed left-0 top-0 w-[7vw] h-full z-[-1]">
        <Sidebar />
      </div>
      <div className="w-[93vw] absolute right-0 top-0 p-5">
        <div className=" ">
          <Header
            img1={'/ic_shareicon.svg'}
            img2={'/Dot3V.svg'}
            style={'gap-[80vw]'}
            img11={'/facebook-icon.svg'}
            img12={'/twitter-icon.svg'}
            img13={'/whatsapp-icom.svg'}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-3 relative mt-20">
          <Image
            src={'/man.jpg'}
            alt="man"
            width={100}
            height={100}
            className=" outline outline-offset-4 outline-black rounded-full"
          />
          <Text style="signup heading" label="Sk Sariful Islam" />
          <Text style="signup text" label="I love smile" />
          <Text style="signup text" label="1 followers  0 following" />
          <Button style={'secondary'} label="Edit profile" />
          <div></div>
        </div>
      </div>
    </div>
  );
}
