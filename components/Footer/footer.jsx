import SubscriptionForm from './SubscriptionForm';
import ContactLinks from './ContactLinks';
import SocialMediaIcons from './SocialMediaIcons';
import ReservedRights from './ReservedRights';

function Footer() {
  return (
    <footer>
      <div className='bg-gradient-to-r from-indigo-600 to-rose-600/90 pt-5'>
        <div className='max-w-screen-xl mx-auto'>
          <SubscriptionForm />
          <hr className='my-5 mx-4' />
          <ContactLinks />
          <hr className='my-5 mx-4' />
          <SocialMediaIcons />
        </div>
      </div>
      <ReservedRights />
    </footer>
  );
}

export default Footer;
