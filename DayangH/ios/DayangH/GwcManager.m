//
//  GwcManager.m
//  DayangH
//
//  Created by apple on 08/12/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "GwcManager.h"
#import <MapKit/MapKit.h>


@implementation GwcManager

RCT_EXPORT_MODULE()
- (UIView *)view {
  return [[MKMapView alloc] init];
}
RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL)
RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)
@end
