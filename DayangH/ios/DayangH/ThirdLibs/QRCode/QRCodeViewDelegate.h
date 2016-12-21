//
//  QRCodeViewDelegate.h
//  DayangH
//
//  Created by apple on 21/12/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
@class QRCodeView;

@protocol QRCodeViewDelegate <NSObject>

- (void)reciveQrcode:(QRCodeView *)codeView code:(NSString *)codeString;

@end
