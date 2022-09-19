import { useState } from 'react';
import AWS from 'aws-sdk';
import styled from '@emotion/styled';
import { hiddenStyle } from '../styles/Hide';

const S3UploadImage = (folderName: string) => {
  const [imageFile, setImageFile] = useState<File | null>(null);

  const REGION = import.meta.env.VITE_AWS_S3_APP_REGION;
  const S3_BUCKET = import.meta.env.VITE_AWS_S3_BUCKET_NAME;

  AWS.config.update({
    region: REGION,
    accessKeyId: import.meta.env.VITE_AWS_S3_ACCESS_ID,
    secretAccessKey: import.meta.env.VITE_AWS_S3_ACCESS_KEY,
  });

  const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET + folderName },
    region: REGION,
    signatureVersion: 'v4',
  });

  const uploadFile = (file: File) => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET,
      Key: folderName + file.name,
      ContentType: 'image/*',
    };

    myBucket.putObject(params).send((err) => {
      if (err) console.log(err);
    });
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const fileExt = file.name.split('.')[1];

      if (fileExt !== 'jpg' && fileExt !== 'jpeg' && fileExt !== 'svg' && fileExt !== 'png') {
        alert('jpg, svg, png 형식의 이미지 파일만 업로드 가능합니다');
      }
      setImageFile(file);
    }
  };

  const handleUploadBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (imageFile) {
      uploadFile(imageFile);
    } else alert('업로드 할 이미지 파일을 선택해주세요');
  };

  return { handleFileInput, handleUploadBtn };
};

export default S3UploadImage;
