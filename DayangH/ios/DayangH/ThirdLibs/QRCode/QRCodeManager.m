//
//  QRCodeManager.m
//  DayangH
//
//  Created by apple on 20/12/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "QRCodeManager.h"

#define kMainScreenWidth [UIScreen mainScreen].bounds.size.width
#define kMainScreenHeight [UIScreen mainScreen].bounds.size.height

@interface QRCodeManager () <AVCaptureMetadataOutputObjectsDelegate>

@property (strong, nonatomic) AVCaptureDevice * device;
@property (strong, nonatomic) AVCaptureDeviceInput * input;
@property (strong, nonatomic) AVCaptureMetadataOutput * output;
@property (strong, nonatomic) AVCaptureSession * session;
@property (strong, nonatomic) AVCaptureVideoPreviewLayer * preview;

@end

@implementation QRCodeManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  _device = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];
  
  // Input
  _input = [AVCaptureDeviceInput deviceInputWithDevice:self.device error:nil];
  
  // Output
  _output = [[AVCaptureMetadataOutput alloc]init];
  [_output setMetadataObjectsDelegate:self queue:dispatch_get_main_queue()];
  
  // Session
  _session = [[AVCaptureSession alloc]init];
  [_session setSessionPreset:AVCaptureSessionPresetHigh];
  if ([_session canAddInput:self.input])
  {
    [_session addInput:self.input];
  }
  
  if ([_session canAddOutput:self.output])
  {
    [_session addOutput:self.output];
  }
  
  // 条码类型 AVMetadataObjectTypeQRCode
  _output.metadataObjectTypes =@[AVMetadataObjectTypeQRCode];
  UIView *returnView = [[UIView alloc] initWithFrame:CGRectMake(0, 64, kMainScreenWidth, kMainScreenHeight-64)];
  // Preview
  _preview =[AVCaptureVideoPreviewLayer layerWithSession:_session];
  _preview.videoGravity =AVLayerVideoGravityResize;
  _preview.frame =returnView.layer.bounds;
  [_session startRunning];
  [returnView.layer insertSublayer:_preview atIndex:0];
  return returnView;
}

#pragma mark AVCaptureMetadataOutputObjectsDelegate
- (void)captureOutput:(AVCaptureOutput *)captureOutput didOutputMetadataObjects:(NSArray *)metadataObjects fromConnection:(AVCaptureConnection *)connection
{
  NSString *stringValue;
  if ([metadataObjects count] >0)
  {
    //停止扫描
    [_session stopRunning];
    AVMetadataMachineReadableCodeObject * metadataObject = [metadataObjects objectAtIndex:0];
    stringValue = metadataObject.stringValue;
  }
  
  NSLog(@" =============扫描二维码的结果%@",stringValue);
  
  [_session startRunning];
}


@end
