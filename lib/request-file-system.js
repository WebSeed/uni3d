"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function requestFileSystem() {
  return new Promise(function (resolve, reject) {
    window.webkitRequestFileSystem(window.PERSISTENT, 1024 * 1024 * 1024, resolve, reject);
  });
}

exports.default = requestFileSystem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXF1ZXN0LWZpbGUtc3lzdGVtLmpzIl0sIm5hbWVzIjpbInJlcXVlc3RGaWxlU3lzdGVtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ3aW5kb3ciLCJ3ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbSIsIlBFUlNJU1RFTlQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBU0EsaUJBQVQsR0FBOEI7QUFDNUIsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxXQUFPQyx1QkFBUCxDQUNFRCxPQUFPRSxVQURULEVBQ3FCLE9BQU8sSUFBUCxHQUFjLElBRG5DLEVBRUVKLE9BRkYsRUFHRUMsTUFIRjtBQUtELEdBTk0sQ0FBUDtBQU9EOztrQkFFY0gsaUIiLCJmaWxlIjoicmVxdWVzdC1maWxlLXN5c3RlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHJlcXVlc3RGaWxlU3lzdGVtICgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB3aW5kb3cud2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0oXG4gICAgICB3aW5kb3cuUEVSU0lTVEVOVCwgMTAyNCAqIDEwMjQgKiAxMDI0LFxuICAgICAgcmVzb2x2ZSxcbiAgICAgIHJlamVjdFxuICAgIClcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdEZpbGVTeXN0ZW1cbiJdfQ==