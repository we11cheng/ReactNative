//
//  RCTMapManager.m
//  DayangH
//
//  Created by apple on 08/12/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RCTMapManager.h"
#import <MapKit/MapKit.h>

@implementation RCTGWCMapManager
RCT_EXPORT_MODULE();

- (UIView *)view {
  return [[MKMapView alloc] init];
}
@end
