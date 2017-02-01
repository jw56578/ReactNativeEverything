//
//  StringProvider.m
//  FirstReactNativeApp
//
//  Created by Jon Woo on 1/25/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "StringProvider.h"

@implementation StringProvider
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getSomeString:(RCTResponseSenderBlock)callback)
{
  // Change this depending on what you want to retrieve:
  NSString* someString = @"something that i want to get from native side";
  
  callback(@[someString]);
}

@end
