import CompactFooter from '@/components/Footer/CompactFooter';
import Logo from '@/components/Logo';

const Footer = () => {
    return (
        <div className="bg-amber-700">
            <div className="py-4 px-4 text-gray-200">
                <CompactFooter
                    logo={
                        <Logo
                            siteName={'The Irish Aires'}
                            color="text-gray-200"
                        />
                    }
                    siteTitle={'The Irish Aires'}
                    links={[[{ label: 'Contact Us', href: '/contact-us' }]]}
                />
            </div>
        </div>
    );
};

export default Footer;
