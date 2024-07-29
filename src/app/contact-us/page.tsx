import ContactUs from '@/templates/ContactUs';

const ContactUsPage = async () => {

    const emailServiceId = process.env.EMAIL_SERVICE_ID as string;
    const emailTemplateId = process.env.EMAIL_TEMPLATE_ID as string;
    const emailPublicKey = process.env.EMAIL_PUBLIC_KEY as string;

    return (
        <div className="m-5 min-h-">
            <div className="flex justify-center items-center">
                <h1 className="text-3xl mb-10 ">Contact Us</h1>
            </div>
            <ContactUs
                emailPublicKey={emailPublicKey}
                emailServiceId={emailServiceId}
                emailTemplateId={emailTemplateId}
            />
        </div>
    );
}

export default ContactUsPage;
