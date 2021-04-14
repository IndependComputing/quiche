var searchIndex = JSON.parse('{\
"quiche":{"doc":"🥧 Savoury implementation of the QUIC transport …","i":[[0,"h3","quiche","HTTP/3 wire protocol and QPACK implementation.",null,null],[17,"APPLICATION_PROTOCOL","quiche::h3","List of ALPN tokens of supported HTTP/3 versions.",null,null],[6,"Result","","A specialized <code>Result</code> type for quiche HTTP/3 operations.",null,null],[4,"Error","","An HTTP/3 error.",null,null],[13,"Done","","There is no error or no work to do",0,null],[13,"BufferTooShort","","The provided buffer is too short.",0,null],[13,"InternalError","","Internal error in the HTTP/3 stack.",0,null],[13,"ExcessiveLoad","","Endpoint detected that the peer is exhibiting behavior …",0,null],[13,"IdError","","Stream ID or Push ID greater that current maximum was …",0,null],[13,"StreamCreationError","","The endpoint detected that its peer created a stream that …",0,null],[13,"ClosedCriticalStream","","A required critical stream was closed.",0,null],[13,"MissingSettings","","No SETTINGS frame at beginning of control stream.",0,null],[13,"FrameUnexpected","","A frame was received which is not permitted in the …",0,null],[13,"FrameError","","Frame violated layout or size rules.",0,null],[13,"QpackDecompressionFailed","","QPACK Header block decompression failure.",0,null],[13,"TransportError","","Error originated from the transport layer.",0,null],[13,"StreamBlocked","","The underlying QUIC stream (or connection) doesn\'t have …",0,null],[13,"SettingsError","","Error in the payload of a SETTINGS frame.",0,null],[13,"RequestRejected","","Server rejected request.",0,null],[13,"RequestCancelled","","Request or its response cancelled.",0,null],[13,"RequestIncomplete","","Client\'s request stream terminated without containing a …",0,null],[13,"MessageError","","An HTTP message was malformed and cannot be processed.",0,null],[13,"ConnectError","","The TCP connection established in response to a CONNECT …",0,null],[13,"VersionFallback","","The requested operation cannot be served over HTTP/3. …",0,null],[3,"Config","","An HTTP/3 configuration.",null,null],[11,"new","","Creates a new configuration object with default settings.",1,[[],[["result",6],["config",3]]]],[11,"set_max_header_list_size","","Sets the <code>SETTINGS_MAX_HEADER_LIST_SIZE</code> setting.",1,[[["u64",15]]]],[11,"set_qpack_max_table_capacity","","Sets the <code>SETTINGS_QPACK_MAX_TABLE_CAPACITY</code> setting.",1,[[["u64",15]]]],[11,"set_qpack_blocked_streams","","Sets the <code>SETTINGS_QPACK_BLOCKED_STREAMS</code> setting.",1,[[["u64",15]]]],[8,"NameValue","","A trait for types with associated string name and value.",null,null],[10,"name","","Returns the object\'s name.",2,[[],["str",15]]],[10,"value","","Returns the object\'s value.",2,[[],["str",15]]],[3,"Header","","An owned name-value pair representing a raw HTTP header.",null,null],[11,"new","","Creates a new header.",3,[[["str",15]]]],[3,"HeaderRef","","A non-owned name-value pair representing a raw HTTP …",null,null],[11,"new","","Creates a new header.",4,[[["str",15]]]],[4,"Event","","An HTTP/3 connection event.",null,null],[13,"Headers","","Request/response headers were received.",5,null],[12,"list","quiche::h3::Event","The list of received header fields. The application …",6,null],[12,"has_body","","Whether data will follow the headers on the stream.",6,null],[13,"Data","quiche::h3","Data was received.",5,null],[13,"Finished","","Stream was closed,",5,null],[13,"Datagram","","DATAGRAM was received.",5,null],[13,"GoAway","","GOAWAY was received.",5,null],[3,"Connection","","An HTTP/3 connection.",null,null],[11,"with_transport","","Creates a new HTTP/3 connection using the provided QUIC …",7,[[["connection",3],["config",3]],[["connection",3],["result",6]]]],[11,"send_request","","Sends an HTTP/3 request.",7,[[["bool",15],["connection",3]],[["result",6],["u64",15]]]],[11,"send_response","","Sends an HTTP/3 response on the specified stream with …",7,[[["bool",15],["connection",3],["u64",15]],["result",6]]],[11,"send_response_with_priority","","Sends an HTTP/3 response on the specified stream with …",7,[[["u64",15],["bool",15],["connection",3],["str",15]],["result",6]]],[11,"send_body","","Sends an HTTP/3 body chunk on the given stream.",7,[[["bool",15],["connection",3],["u64",15]],[["usize",15],["result",6]]]],[11,"dgram_enabled_by_peer","","Returns whether the peer enabled HTTP/3 DATAGRAM frame …",7,[[["connection",3]],["bool",15]]],[11,"send_dgram","","Sends an HTTP/3 DATAGRAM with the specified flow ID.",7,[[["connection",3],["u64",15]],["result",6]]],[11,"recv_dgram","","Reads a DATAGRAM into the provided buffer.",7,[[["connection",3]],["result",6]]],[11,"dgram_max_writable_len","","Returns the maximum HTTP/3 DATAGRAM payload that can be …",7,[[["connection",3],["u64",15]],[["usize",15],["option",4]]]],[11,"recv_body","","Reads request or response body data into the provided …",7,[[["connection",3],["u64",15]],[["usize",15],["result",6]]]],[11,"poll","","Processes HTTP/3 data received from the peer.",7,[[["connection",3]],["result",6]]],[11,"send_goaway","","Sends a GOAWAY frame to initiate graceful connection …",7,[[["connection",3],["u64",15]],["result",6]]],[17,"PROTOCOL_VERSION","quiche","The current QUIC wire version.",null,null],[17,"MAX_CONN_ID_LEN","","The maximum length of a connection ID.",null,null],[17,"MIN_CLIENT_INITIAL_LEN","","The minimum length of Initial packets sent by a client.",null,null],[6,"Result","","A specialized <code>Result</code> type for quiche operations.",null,null],[4,"Error","","A QUIC error.",null,null],[13,"Done","","There is no more work to do.",8,null],[13,"BufferTooShort","","The provided buffer is too short.",8,null],[13,"UnknownVersion","","The provided packet cannot be parsed because its version …",8,null],[13,"InvalidFrame","","The provided packet cannot be parsed because it contains …",8,null],[13,"InvalidPacket","","The provided packet cannot be parsed.",8,null],[13,"InvalidState","","The operation cannot be completed because the connection …",8,null],[13,"InvalidStreamState","","The operation cannot be completed because the stream is …",8,null],[13,"InvalidTransportParam","","The peer\'s transport params cannot be parsed.",8,null],[13,"CryptoFail","","A cryptographic operation failed.",8,null],[13,"TlsFail","","The TLS handshake failed.",8,null],[13,"FlowControl","","The peer violated the local flow control limits.",8,null],[13,"StreamLimit","","The peer violated the local stream limits.",8,null],[13,"StreamStopped","","The specified stream was stopped by the peer.",8,null],[13,"FinalSize","","The received data exceeds the stream\'s final size.",8,null],[13,"CongestionControl","","Error in congestion control.",8,null],[3,"ConnectionError","","Represents information carried by <code>CONNECTION_CLOSE</code> frames.",null,null],[12,"is_app","","Whether the error came from the application or the …",9,null],[12,"error_code","","The error code carried by the <code>CONNECTION_CLOSE</code> frame.",9,null],[12,"reason","","The reason carried by the <code>CONNECTION_CLOSE</code> frame.",9,null],[4,"Shutdown","","The stream\'s side to shutdown.",null,null],[13,"Read","","Stop receiving stream data.",10,null],[13,"Write","","Stop sending stream data.",10,null],[3,"Config","","Stores configuration shared between multiple connections.",null,null],[11,"new","","Creates a config object with the given version.",11,[[["u32",15]],[["config",3],["result",6]]]],[11,"load_cert_chain_from_pem_file","","Configures the given certificate chain.",11,[[["str",15]],["result",6]]],[11,"load_priv_key_from_pem_file","","Configures the given private key.",11,[[["str",15]],["result",6]]],[11,"load_verify_locations_from_file","","Specifies a file where trusted CA certificates are stored …",11,[[["str",15]],["result",6]]],[11,"load_verify_locations_from_directory","","Specifies a directory where trusted CA certificates are …",11,[[["str",15]],["result",6]]],[11,"verify_peer","","Configures whether to verify the peer\'s certificate.",11,[[["bool",15]]]],[11,"grease","","Configures whether to send GREASE values.",11,[[["bool",15]]]],[11,"log_keys","","Enables logging of secrets.",11,[[]]],[11,"enable_early_data","","Enables sending or receiving early data.",11,[[]]],[11,"set_application_protos","","Configures the list of supported application protocols.",11,[[],["result",6]]],[11,"set_max_idle_timeout","","Sets the <code>max_idle_timeout</code> transport parameter, in …",11,[[["u64",15]]]],[11,"set_max_recv_udp_payload_size","","Sets the <code>max_udp_payload_size transport</code> parameter.",11,[[["usize",15]]]],[11,"set_max_send_udp_payload_size","","Sets the maximum outgoing UDP payload size.",11,[[["usize",15]]]],[11,"set_initial_max_data","","Sets the <code>initial_max_data</code> transport parameter.",11,[[["u64",15]]]],[11,"set_initial_max_stream_data_bidi_local","","Sets the <code>initial_max_stream_data_bidi_local</code> transport …",11,[[["u64",15]]]],[11,"set_initial_max_stream_data_bidi_remote","","Sets the <code>initial_max_stream_data_bidi_remote</code> transport …",11,[[["u64",15]]]],[11,"set_initial_max_stream_data_uni","","Sets the <code>initial_max_stream_data_uni</code> transport parameter.",11,[[["u64",15]]]],[11,"set_initial_max_streams_bidi","","Sets the <code>initial_max_streams_bidi</code> transport parameter.",11,[[["u64",15]]]],[11,"set_initial_max_streams_uni","","Sets the <code>initial_max_streams_uni</code> transport parameter.",11,[[["u64",15]]]],[11,"set_ack_delay_exponent","","Sets the <code>ack_delay_exponent</code> transport parameter.",11,[[["u64",15]]]],[11,"set_max_ack_delay","","Sets the <code>max_ack_delay</code> transport parameter.",11,[[["u64",15]]]],[11,"set_disable_active_migration","","Sets the <code>disable_active_migration</code> transport parameter.",11,[[["bool",15]]]],[11,"set_cc_algorithm_name","","Sets the congestion control algorithm used by string.",11,[[["str",15]],["result",6]]],[11,"set_cc_algorithm","","Sets the congestion control algorithm used.",11,[[["congestioncontrolalgorithm",4]]]],[11,"enable_hystart","","Configures whether to enable HyStart++.",11,[[["bool",15]]]],[11,"enable_dgram","","Configures whether to enable receiving DATAGRAM frames.",11,[[["bool",15],["usize",15]]]],[3,"Connection","","A QUIC connection.",null,null],[5,"accept","","Creates a new server-side connection.",null,[[["option",4],["config",3],["connectionid",3]],[["result",6],["pin",3]]]],[5,"connect","","Creates a new client-side connection.",null,[[["connectionid",3],["config",3],["option",4],["str",15]],[["result",6],["pin",3]]]],[5,"negotiate_version","","Writes a version negotiation packet.",null,[[["connectionid",3]],[["usize",15],["result",6]]]],[5,"retry","","Writes a stateless retry packet.",null,[[["u32",15],["connectionid",3]],[["usize",15],["result",6]]]],[5,"version_is_supported","","Returns true if the given protocol version is supported.",null,[[["u32",15]],["bool",15]]],[11,"set_keylog","","Sets keylog output to the designated <code>Writer</code>.",12,[[["write",8],["box",3]]]],[11,"recv","","Processes QUIC packets received from the peer.",12,[[],[["usize",15],["result",6]]]],[11,"send","","Writes a single QUIC packet to be sent to the peer.",12,[[],[["usize",15],["result",6]]]],[11,"stream_recv","","Reads contiguous data from a stream into the provided …",12,[[["u64",15]],["result",6]]],[11,"stream_send","","Writes data to a stream.",12,[[["bool",15],["u64",15]],[["usize",15],["result",6]]]],[11,"stream_priority","","Sets the priority for a stream.",12,[[["u8",15],["bool",15],["u64",15]],["result",6]]],[11,"stream_shutdown","","Shuts down reading or writing from/to the specified …",12,[[["shutdown",4],["u64",15]],["result",6]]],[11,"stream_capacity","","Returns the stream\'s send capacity in bytes.",12,[[["u64",15]],[["usize",15],["result",6]]]],[11,"stream_readable","","Returns true if the stream has data that can be read.",12,[[["u64",15]],["bool",15]]],[11,"stream_finished","","Returns true if all the data has been read from the …",12,[[["u64",15]],["bool",15]]],[11,"peer_streams_left_bidi","","Returns the number of bidirectional streams that can be …",12,[[],["u64",15]]],[11,"peer_streams_left_uni","","Returns the number of unidirectional streams that can be …",12,[[],["u64",15]]],[11,"stream_init_application_data","","Initializes the stream\'s application data.",12,[[["u64",15]],["result",6]]],[11,"stream_application_data","","Returns the stream\'s application data, if any was …",12,[[["u64",15]],[["any",8],["option",4]]]],[11,"readable","","Returns an iterator over streams that have outstanding …",12,[[],["streamiter",3]]],[11,"writable","","Returns an iterator over streams that can be written to.",12,[[],["streamiter",3]]],[11,"max_send_udp_payload_size","","Returns the maximum possible size of egress UDP payloads.",12,[[],["usize",15]]],[11,"dgram_recv","","Reads the first received DATAGRAM.",12,[[],[["usize",15],["result",6]]]],[11,"dgram_recv_peek","","Reads the first received DATAGRAM without removing it …",12,[[["usize",15]],[["usize",15],["result",6]]]],[11,"dgram_recv_front_len","","Returns the length of the first stored DATAGRAM.",12,[[],[["usize",15],["option",4]]]],[11,"dgram_send","","Sends data in a DATAGRAM frame.",12,[[],["result",6]]],[11,"dgram_purge_outgoing","","Purges queued outgoing DATAGRAMs matching the predicate.",12,[[["fn",8]]]],[11,"dgram_max_writable_len","","Returns the maximum DATAGRAM payload that can be sent.",12,[[],[["usize",15],["option",4]]]],[11,"timeout","","Returns the amount of time until the next timeout event.",12,[[],[["option",4],["duration",3]]]],[11,"on_timeout","","Processes a timeout event.",12,[[]]],[11,"close","","Closes the connection with the given error and reason.",12,[[["bool",15],["u64",15]],["result",6]]],[11,"trace_id","","Returns a string uniquely representing the connection.",12,[[],["str",15]]],[11,"application_proto","","Returns the negotiated ALPN protocol.",12,[[]]],[11,"peer_cert","","Returns the peer\'s leaf certificate (if any) as a …",12,[[],[["option",4],["vec",3]]]],[11,"source_id","","Returns the source connection ID.",12,[[],["connectionid",3]]],[11,"destination_id","","Returns the destination connection ID.",12,[[],["connectionid",3]]],[11,"is_established","","Returns true if the connection handshake is complete.",12,[[],["bool",15]]],[11,"is_resumed","","Returns true if the connection is resumed.",12,[[],["bool",15]]],[11,"is_in_early_data","","Returns true if the connection has a pending handshake …",12,[[],["bool",15]]],[11,"is_readable","","Returns whether there is stream or DATAGRAM data …",12,[[],["bool",15]]],[11,"is_draining","","Returns true if the connection is draining.",12,[[],["bool",15]]],[11,"is_closed","","Returns true if the connection is closed.",12,[[],["bool",15]]],[11,"peer_error","","Returns the error received from the peer, if any.",12,[[],[["option",4],["connectionerror",3]]]],[11,"stats","","Collects and returns statistics about the connection.",12,[[],["stats",3]]],[3,"Stats","","Statistics about the connection.",null,null],[12,"recv","","The number of QUIC packets received.",13,null],[12,"sent","","The number of QUIC packets sent.",13,null],[12,"lost","","The number of QUIC packets that were lost.",13,null],[12,"rtt","","The estimated round-trip time of the connection.",13,null],[12,"cwnd","","The size of the connection\'s congestion window in bytes.",13,null],[12,"delivery_rate","","The most recent data delivery rate estimate in bytes/s.",13,null],[3,"ConnectionId","","A QUIC connection ID.",null,null],[3,"Header","","A QUIC packet\'s header.",null,null],[12,"ty","","The type of the packet.",14,null],[12,"version","","The version of the packet.",14,null],[12,"dcid","","The destination connection ID of the packet.",14,null],[12,"scid","","The source connection ID of the packet.",14,null],[12,"token","","The address verification token of the packet. Only …",14,null],[12,"versions","","The list of versions in the packet. Only present in …",14,null],[4,"Type","","QUIC packet type.",null,null],[13,"Initial","","Initial packet.",15,null],[13,"Retry","","Retry packet.",15,null],[13,"Handshake","","Handshake packet.",15,null],[13,"ZeroRTT","","0-RTT packet.",15,null],[13,"VersionNegotiation","","Version negotiation packet.",15,null],[13,"Short","","1-RTT short header packet.",15,null],[4,"CongestionControlAlgorithm","","Available congestion control algorithms.",null,null],[13,"Reno","","Reno congestion control algorithm. <code>reno</code> in a string form.",16,null],[13,"CUBIC","","CUBIC congestion control algorithm (default). <code>cubic</code> in a …",16,null],[3,"StreamIter","","An iterator over QUIC streams.",null,null],[11,"from","quiche::h3","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"to_string","","",0,[[],["string",3]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","quiche","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"to_owned","","",17,[[]]],[11,"clone_into","","",17,[[]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"into_iter","","",18,[[]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"to_string","","",8,[[],["string",3]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"name","quiche::h3","",3,[[],["str",15]]],[11,"value","","",3,[[],["str",15]]],[11,"name","","",4,[[],["str",15]]],[11,"value","","",4,[[],["str",15]]],[11,"as_ref","quiche","",17,[[]]],[11,"from","quiche::h3","",0,[[["error",4]]]],[11,"from","quiche","",17,[[["vec",3],["u8",15]]]],[11,"len","","",18,[[],["usize",15]]],[11,"next","","",18,[[],["option",4]]],[11,"clone","","",8,[[],["error",4]]],[11,"clone","","",9,[[],["connectionerror",3]]],[11,"clone","","",13,[[],["stats",3]]],[11,"clone","quiche::h3","",0,[[],["error",4]]],[11,"clone","","",3,[[],["header",3]]],[11,"clone","","",4,[[],["headerref",3]]],[11,"clone","","",5,[[],["event",4]]],[11,"clone","quiche","",15,[[],["type",4]]],[11,"clone","","",17,[[]]],[11,"clone","","",14,[[],["header",3]]],[11,"clone","","",16,[[],["congestioncontrolalgorithm",4]]],[11,"default","","",17,[[]]],[11,"default","","",18,[[],["streamiter",3]]],[11,"eq","","",8,[[["error",4]],["bool",15]]],[11,"ne","","",8,[[["error",4]],["bool",15]]],[11,"eq","","",9,[[["connectionerror",3]],["bool",15]]],[11,"ne","","",9,[[["connectionerror",3]],["bool",15]]],[11,"eq","quiche::h3","",0,[[["error",4]],["bool",15]]],[11,"ne","","",0,[[["error",4]],["bool",15]]],[11,"eq","","",3,[[["header",3]],["bool",15]]],[11,"ne","","",3,[[["header",3]],["bool",15]]],[11,"eq","","",4,[[["headerref",3]],["bool",15]]],[11,"ne","","",4,[[["headerref",3]],["bool",15]]],[11,"eq","","",5,[[["event",4]],["bool",15]]],[11,"ne","","",5,[[["event",4]],["bool",15]]],[11,"eq","quiche","",15,[[["type",4]],["bool",15]]],[11,"eq","","",17,[[],["bool",15]]],[11,"eq","","",14,[[["header",3]],["bool",15]]],[11,"ne","","",14,[[["header",3]],["bool",15]]],[11,"eq","","",16,[[["congestioncontrolalgorithm",4]],["bool",15]]],[11,"deref","","",17,[[]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","quiche::h3","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","quiche","",15,[[["formatter",3]],["result",6]]],[11,"fmt","","",17,[[["formatter",3]],["result",6]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","quiche::h3","",0,[[["formatter",3]],["result",6]]],[11,"hash","quiche","",17,[[]]],[11,"from_str","","Converts a string to <code>CongestionControlAlgorithm</code>.",16,[[["str",15]],["result",4]]],[11,"source","","",8,[[],[["error",8],["option",4]]]],[11,"source","quiche::h3","",0,[[],[["error",8],["option",4]]]],[11,"from_vec","quiche","Creates a new connection ID from the given vector.",17,[[["vec",3],["u8",15]]]],[11,"from_ref","","Creates a new connection ID from the given slice.",17,[[]]],[11,"into_owned","","Returns a new owning connection ID from the given …",17,[[],["connectionid",3]]],[11,"from_slice","","Parses a QUIC packet header from the given buffer.",14,[[["usize",15]],[["result",6],["header",3]]]]],"p":[[4,"Error"],[3,"Config"],[8,"NameValue"],[3,"Header"],[3,"HeaderRef"],[4,"Event"],[13,"Headers"],[3,"Connection"],[4,"Error"],[3,"ConnectionError"],[4,"Shutdown"],[3,"Config"],[3,"Connection"],[3,"Stats"],[3,"Header"],[4,"Type"],[4,"CongestionControlAlgorithm"],[3,"ConnectionId"],[3,"StreamIter"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);