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
    return (
        <Formik initialValues={{name: '', message: '', email: ''}} onSubmit={async (values, {setSubmitting}) => {

            await emailjs.send(emailServiceId, emailTemplateId, values, {
                publicKey: emailPublicKey,
            })
            setSubmitting(false);
        }}>
            {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                <form onSubmit={handleSubmit} className={"flex flex-col space-y-4"}>
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

                    <div className={'self-center'}>
                        <button type="submit" disabled={isSubmitting}
                                className={"text-amber-200 bg-green-700 px-8 py-3 rounded-lg text-xl"}>Submit
                        </button>
                    </div>

                </form>
            )}
        </Formik>
    );
};

export default ContactUs;