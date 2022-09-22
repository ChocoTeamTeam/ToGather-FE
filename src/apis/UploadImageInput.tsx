import { useState } from 'react';
import AWS from 'aws-sdk';
import styled from '@emotion/styled';

const ProfileUploadWrap = styled.form``;

const UploadTest = () => {
  const REGION = import.meta.env.VITE_AWS_S3_APP_REGION;
  const S3_BUCKET = import.meta.env.VITE_AWS_S3_BUCKET_NAME;

  AWS.config.update({
    region: REGION,
    accessKeyId: import.meta.env.VITE_AWS_S3_ACCESS_ID,
    secretAccessKey: import.meta.env.VITE_AWS_S3_ACCESS_KEY,
  });

  const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET + 'TechImages/' },
    region: REGION,
  });

  const uploadFile = (file: File) => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET,
      Key: 'TechImages/' + file.name,
      ContentType: 'image/svg+xml',
    };

    myBucket.putObject(params).send((err) => {
      if (err) console.log('error' + err);
    });
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      uploadFile(file);
      e.target.value = '';
    }
  };

  return (
    <ProfileUploadWrap>
      <input id="uploadImages" type="file" onChange={handleFileInput} />
      <img src="https://togaher-teamteam.s3.ap-northeast-2.amazonaws.com/TechImages/aws.svg"></img>
    </ProfileUploadWrap>
  );
};

export default UploadTest;
