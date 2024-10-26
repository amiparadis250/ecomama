"use client";
import React from 'react';
import { Typography, Button, Card, Row, Col, List, Timeline, Tag, Space, Divider } from 'antd';
import { CalendarOutlined, TeamOutlined, TrophyOutlined, BookOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/utils/constant/images';

const { Title, Paragraph, Text } = Typography;

const Page: React.FC = () => {
  const programHighlights = [
    {
      title: 'Professional Training',
      description: 'Two-day intensive training on climate change mental health impacts',
      icon: <CalendarOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
    },
    {
      title: 'Community Impact',
      description: 'Become a mental health advocate in your community',
      icon: <TeamOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
    },
    {
      title: 'Networking',
      description: 'Connect with other women leaders and mental health professionals',
      icon: <TeamOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
    },
    {
      title: 'Certification',
      description: 'Receive a certificate upon program completion',
      icon: <TrophyOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
    }
  ];

  const eligibilityRequirements = [
    'Must be 18 years old or above',
    'Must be Rwandan woman living in rural district',
    'Must have access to internet and device for training',
    'All education levels welcome'
  ];

  const learningOutcomes = [
    "Understanding climate change's psychological impact",
    'Mental health management strategies',
    'Community advocacy skills',
    'Resource navigation and support systems'
  ];

  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Hero Section */}
      <Row gutter={[48, 48]} align="middle">
        <Col xs={24} lg={12}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Title level={1} style={{ marginTop: 0 }}>
              Women Warriors Program - Building Mental Health Resilience in Climate Change
            </Title>
            <Paragraph style={{ fontSize: '16px' }}>
              eco-mama is proud to introduce our{' '}
              <Text strong>
                WOMEN WARRIORS Program aims to help local youth and young women become advocates for mental health resilience in their communities and ambassadors, teaches skills of community resilience planning
              </Text>
            </Paragraph>
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfXoRvmHQJh9mCjEp-5DzRQ3jtVdpjSFwPcNleGCU7UMmaR8A/viewform"
              passHref
            >
              <Button id="hero" type="primary" size="large" icon={<ArrowRightOutlined />}>
                Apply Now
              </Button>
            </Link>
          </Space>
        </Col>
        <Col xs={24} lg={12}>
          <Image
            src={images.farmer}
            alt="women_warriors_image"
            style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
          />
        </Col>
      </Row>

      <Divider />

      {/* Program Highlights Section with better spacing and centering */}
      <div style={{ 
        width: '100%', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 24px'
      }}>
        <Title 
          level={2} 
          style={{ 
            textAlign: 'center',
            marginBottom: '32px',
            marginTop: '24px'
          }}
        >
          Program Highlights
        </Title>
        <Row 
          gutter={[24, 24]} 
          style={{ 
            marginBottom: '48px',
            width: '100%',
            maxWidth: '1200px'
          }}
        >
          {programHighlights.map((highlight, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card 
                hoverable
                style={{ height: '100%' }}
                bodyStyle={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                {highlight.icon}
                <Title level={4} style={{ marginTop: '16px' }}>{highlight.title}</Title>
                <Paragraph>{highlight.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Rest of the components remain the same */}
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <Card id="eligibility" title={<Title level={2}>Eligibility Requirements</Title>}>
            <List
              dataSource={eligibilityRequirements}
              renderItem={(item) => (
                <List.Item>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title={<Title level={2}>What You'll Learn</Title>}>
            <Timeline
              items={learningOutcomes.map((item, index) => ({
                color: 'blue',
                children: item
              }))}
            />
          </Card>
        </Col>
      </Row>

      {/* Application Section */}
      <Card style={{ marginTop: '48px', textAlign: 'center', background: '#f0f5ff' }}>
        <Space direction="vertical" size="large">
          <Title level={2}>Ready to Make an Impact?</Title>
          <Paragraph style={{ fontSize: '16px' }}>
            Don't miss this opportunity to become a mental health advocate in your community!
          </Paragraph>
          <Link 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfXoRvmHQJh9mCjEp-5DzRQ3jtVdpjSFwPcNleGCU7UMmaR8A/viewform"
            passHref
          >
            <Button type="primary" size="large" icon={<ArrowRightOutlined />}>
              Apply Now
            </Button>
          </Link>
        </Space>
      </Card>
    </div>
  );
};

export default Page;