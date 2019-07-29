/**
 * Dependencies
 */

const admin = require('firebase-admin');

/**
 * Initialize firebase client
 */

admin.initializeApp({credential: admin.credential.cert({
    "type": "service_account",
    "project_id": "brav-3077e",
    "private_key_id": "55de741ac50b41d19748cec820b2eb0dc334931e",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCkAuWQZOb8RekB\ndCbcLsjC2AUhLV4ePR1GMb8T+kcZ/IFrgT5tzpcEbmbdu24Iu18qs71G/o8n8tiB\nfVXk0iAAEVTfYsx8FrlWVmHP6B6YVTOppu5a2P3wk3F+xOKxM3/a8LTRpBGacc7t\nBF03xLl/9Ly3eA09WIa6GBYSGWUSfrcqMnu1nnStGfkcwBkJloqf7pcCtX1oj93C\n6xVwhQ77Z2ixBXDbdPeLUfocix1nn9V/ZhDxgK6yYz9BKDfphFEQ44K+2WBvoz1H\nN8USRMyxRo0FVsg+IoK+c/81ChcQtYZeMrGrPUwnvJiCvhAKf/9rC51fmMwHyTbn\ntTFNmLv9AgMBAAECggEAS/1NmJevj83iVbqXsKd6fBAzXDpVY6RENnwhAGQS4l7k\nJcelgaHYxYRTY8OOCTyrLLFHbqfN8x/ooSJNlC2pBu8AyFlRzeKHb5GpUvdEiabc\nP2vo/q2QBpGB4c7eC2UFhY7F8GXYhBrb2WQOvqKGodrmPwk/9R7ZmUpEm5Epi6Xs\nNs45hJGuXx25NY7r1A41cmoBlJX2PRi/ZtL1u1sF0lw9PEPK/RnsLq/593gWutKq\nl8leuL3kGFlwYxR1MHetzqJDZcpbks2TpHtTDOMd7DSI2P88MBl79X8Cca2/19lP\nmnLbM3m00yq9s1DHHQzIznTObM6wLalB2lxOylHtjwKBgQDkw53ODFKqtW5WtrxF\nb462bhHXPxu5eEs/VMCap8nvPH2s2A10dtYCFvh+/dw+0CEbSgNXl+CrFFijj2OI\nzzNNNScdTUADk8q29sXOmUzC3+1wMFsb7kdd008rgTF626aOuz9UBHiTHSZjfnIX\nDLl5LzwMETs6sEJZgJxZtB/SAwKBgQC3ibZ83XGVzHyQ7nfKUcgcwz/TJ4PN65Sg\ny2rDxrJr/ML2pyveFbmvw4XTf0iqDRk3Qp5FeZKvrngAVXjr8wAFdjgI/XUDmXjn\n9d0nJ6wsrUOjgK15lr3XlhbJKqGzFn/XMTbGGEY/lj+MCSuFz1Fg0/Ma1qEBsX0/\n0d99XvbZ/wKBgQC9SQsC2flw3MyenXcs8QCh/HNwqfwzu9BvZ54ymZEiDehjIyYG\n7ulnM0CMO1uI8cfi/5vCV54DkMNDGrseEWv+f3OM8EV+cER0nb3Qk9ILESQzBx/r\n/X45qUXB1pVtdd/cDB17VHO8Lot8Gb0nS1UQa8AAsCVVC1DrI9q68qq9pwKBgHB9\nz4Oolj2iH5cVEgbHKUe3xB6/UWGcynPjOYTU+/aD7VsQCysLVcwMorGGihrv/EyK\nYEdkxCs5XAOYX4z+Wzz9wEqCTn3uStShNPMStcyMRbCo5apoYeMI8t5JauJBIAnc\n+B1iM2w1wq0p0asp7k7SmWYRto07I/FBySEmW1YxAoGBAJ1L+R6ItV8gzs5pKHA9\nkoRdo/3BTiJBV5Ok2cmn0s2NpwLMgDhgzje3HTt9Wkp3s7okmpLj2tN/NIym78WE\nTbRLgL5GnUCB1Hqb5k5LHo4Hb6MXG0BVN3eI8H/mXhxB495nmWZZ9xnQSOk4pwxF\n+qyYfVX1+FSMaUO5G5hzJbpr\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-jrp1h@brav-3077e.iam.gserviceaccount.com",
    "client_id": "117716300584604473984",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jrp1h%40brav-3077e.iam.gserviceaccount.com"
})});

/**
 * Export firebase client
 */

module.exports = admin
