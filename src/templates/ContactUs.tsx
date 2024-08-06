'use client'
import React from 'react';
import emailjs from '@emailjs/browser';
import {Formik} from "formik";
import Input from "@/components/Input";

interface ContactUsProps {
    emailServiceId: string;
    emailTemplateId: string;
    emailPublicKey: string;
}


export const ContactUs = ({emailServiceId, emailTemplateId, emailPublicKey}: ContactUsProps) => {
    const [sendError, setSendError] = React.useState<string | null>(null);
    const [sendSuccess, setSendSuccess] = React.useState<boolean>(false);

    return (
        <Formik initialValues={{name: '', message: '', email: ''}} onSubmit={async (values, {setSubmitting}) => {

            try {
                await emailjs.send(emailServiceId, emailTemplateId, values, {
                    publicKey: emailPublicKey,
                })
                setSubmitting(false);
                setSendSuccess(true);
            } catch (e) {
                setSendError("Failed to send message. Please try again later.");
                console.error(e);
                setSubmitting(false);
            }

        }}>
            {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                <form onSubmit={handleSubmit} className={"flex flex-col space-y-4"}>
                    <div className={'self-center'}>
                        <p className={"text-xl"}>Send us a message and we'll get back to you as soon as we can!</p>
                    </div>
                    <div>
                        <Input
                            id={'name'}
                            name={'name'}
                            label={'Your Name'}
                            type={'text'}
                            errors={errors}
                            touched={touched}
                        />
                    </div>
                    <div>
                        <Input
                            id={'email'}
                            name={'email'}
                            label={'Your Email'}
                            type={'email'}
                            errors={errors}
                            touched={touched}
                        />
                    </div>
                    <div>
                        <Input
                            id={'message'}
                            name={'message'}
                            label={'Your Message'}
                            type={'textarea'}
                            as={'textarea'}
                            rows={'5'}
                            errors={errors}
                            touched={touched}
                        />
                    </div>

                    {!sendError && !sendSuccess && (<div className={'self-center'}>
                        <button type="submit" disabled={isSubmitting}
                                className={"text-amber-200 bg-green-700 px-8 py-3 rounded-lg text-xl"}>Submit
                        </button>
                    </div>)}
                    {sendError && (<div className={'self-center'}>
                        <div className="bg-red-700 text-white text-base rounded-lg p-4 flex">
                            <p>{sendError}</p>
                        </div>
                    </div>)}
                    {sendSuccess && (<div className={'self-center'}>
                            <div className="bg-green-700 text-white text-base rounded-lg p-4 flex">
                                <p>Message sent! We'll get back to you soon!</p>
                            </div>
                        </div>
                    )}

                </form>
            )}
        </Formik>
    );
};

export default ContactUs;