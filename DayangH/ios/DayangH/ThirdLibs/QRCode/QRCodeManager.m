//
//  QRCodeManager.m
//  DayangH
//
//  Created by apple on 20/12/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "QRCodeManager.h"
#import "QRCodeView.h"

@interface QRCodeManager () 

@end

@implementation QRCodeManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  QRCodeView *codeView = [[QRCodeView alloc] init];
  NSLog(@"codeView:%@",codeView);
  return codeView;
}

@end
