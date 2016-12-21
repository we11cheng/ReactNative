//
//  QRCodeManager.m
//  DayangH
//
//  Created by apple on 20/12/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "QRCodeManager.h"
#import "QRCodeView.h"

@interface QRCodeManager () <QRCodeViewDelegate>

@end

@implementation QRCodeManager

RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock)

- (UIView *)view {
  QRCodeView *codeView = [[QRCodeView alloc] init];
  codeView.delegate = self;
  NSLog(@"codeView:%@",codeView);
  return codeView;
}

#pragma mark QRCodeViewDelegate Method
- (void)reciveQrcode:(QRCodeView *)codeView code:(NSString *)codeString {
  if (!codeView.onChange) {
    return;
  } else {
    codeView.onChange(@{@"code":codeString});
  }
  
}

@end
