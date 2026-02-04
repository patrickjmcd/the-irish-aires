import Logo from '@/components/Logo';
import Navbar from '../components/Navbar';

const navBar = async () => {
    const home = {
        label: 'Home',
        href: '/',
    };
    const schedule = {
        label: 'Schedule',
        href: '/schedule',
    };

    const media = {
        label: 'Media',
        href: '/media',
    };

    const songs = {
        label: 'Song Sheet',
        href: '/songs',
    };

    return (
        <Navbar
            items={[home, schedule, media, songs]}
            logo={<Logo xl siteName={'The Irish Aires'} />}
            textColor="text-amber-500 dark:bg-text-white"
            backgroundColor="bg-emerald-800"
            hoverTextColor={'hover:text-emerald-500'}
            selectedBackgroundColor={'bg-emerald-700'}
        />
    );
};

export default navBar;
