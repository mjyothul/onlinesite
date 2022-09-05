
import React from 'react';
import Layout from '@theme/Layout';

export default function Team(){
    return(
        <Layout title='Team' description='About Our Team'>
            <div
                style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '20px',
                        paddingLeft:'60px',
                        paddingRight:'20px',
                    }}>
                    <p>
                    <br></br>
                    <br></br>
                    Our expert team of software engineers conceptualizes and implements AI-driven software solutions 
                    into business operations to contribute to long-term business continuity and efficiency, including 
                    smart systems for data-driven decision making, marketing & sales, or customer service.
                    <br></br>
                    <br></br>
                    <h1>Data-Driven Decision Making</h1>
                    To assist in informed executive-level decision making, we engineer smart systems for identifying 
                    growth hacking opportunities, trends, and anomalies in operational processes, including risk 
                    analytics, predictive maintenance, operational forecasting, and demand prediction.
                    <br></br>
                    <br></br>
                    <h1>Marketing & Sales</h1>
                    We implement AI algorithms to help business operations maximize acquisition, retention, and 
                    relevance to their marketing & branding campaigns, including sales forecasting, brand sentiment 
                    analytics, lead scoring & LTV calculator, customer segmentation, and customer behavior analytics.
                    <br></br>
                    <br></br>
                    <h1>Customer Service</h1>
                    Our developers augment customer service workflows using AI, creating advanced customer data 
                    analytics and conversational agents to improve customer service, including chatbots for 
                    small-scale and RPAs for ERP, voice-first interfaces, cognitive assistants, contextual 
                    recommendations, and intelligent self-service options.
                    <br></br>
                    <br></br>
                    </p>
            </div>
        </Layout>
    );
}